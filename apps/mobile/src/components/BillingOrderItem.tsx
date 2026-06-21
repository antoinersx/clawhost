import type { FC, ReactNode } from 'react'
import type { BillingOrderItemProps } from '@/ts/Interfaces'

import {
    ActivityIndicator,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { DownloadSimple } from 'phosphor-react-native'
import { t } from '@openclaw/i18n'
import { COLORS } from '@/lib/theme'
import getLocale from '@/lib/getLocale'

const BillingOrderItem: FC<BillingOrderItemProps> = ({
    order,
    onViewInvoice,
    isInvoiceLoading
}): ReactNode => {
    const formatDate = (dateString: string): string => {
        return new Date(dateString).toLocaleDateString(getLocale(), {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    const formatCurrency = (amount: number, currency: string): string => {
        return new Intl.NumberFormat(getLocale(), {
            style: 'currency',
            currency: currency.toUpperCase()
        }).format(amount / 100)
    }

    const getBillingReasonLabel = (reason: string): string => {
        switch (reason) {
            case 'purchase':
                return t('billing.billingReasonPurchase')
            case 'subscription_create':
                return t('billing.billingReasonSubscriptionCreate')
            case 'subscription_cycle':
                return t('billing.billingReasonSubscriptionCycle')
            case 'subscription_update':
                return t('billing.billingReasonSubscriptionUpdate')
            default:
                return reason
        }
    }

    const getStatusStyle = (status: string): { text: string; bg: string } => {
        switch (status) {
            case 'paid':
                return { text: '#4ade80', bg: 'rgba(34,197,94,0.15)' }
            case 'pending':
                return { text: '#facc15', bg: 'rgba(234,179,8,0.15)' }
            case 'refunded':
                return { text: '#f87171', bg: 'rgba(239,68,68,0.15)' }
            case 'partially_refunded':
                return { text: '#fb923c', bg: 'rgba(249,115,22,0.15)' }
            default:
                return { text: COLORS.textMuted, bg: 'rgba(255,255,255,0.05)' }
        }
    }

    const getStatusLabel = (status: string): string => {
        switch (status) {
            case 'paid':
                return t('billing.statusPaid')
            case 'pending':
                return t('billing.statusPending')
            case 'refunded':
                return t('billing.statusRefunded')
            case 'partially_refunded':
                return t('billing.statusPartiallyRefunded')
            default:
                return status
        }
    }

    const statusStyle = getStatusStyle(order.status)

    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <Text style={styles.productName} numberOfLines={1}>
                    {order.productName ||
                        getBillingReasonLabel(order.billingReason)}
                </Text>
                <Text style={styles.date}>{formatDate(order.createdAt)}</Text>
                {order.discountName && (
                    <Text style={styles.coupon}>
                        {t('billing.couponApplied', {
                            name: order.discountName
                        })}
                    </Text>
                )}
            </View>
            <View style={styles.rightSection}>
                <View style={styles.amountContainer}>
                    {order.discountAmount > 0 && (
                        <Text style={styles.originalAmount}>
                            {formatCurrency(
                                order.subtotalAmount,
                                order.currency
                            )}
                        </Text>
                    )}
                    <Text style={styles.amount}>
                        {formatCurrency(order.totalAmount, order.currency)}
                    </Text>
                </View>
                <View
                    style={[
                        styles.statusBadge,
                        { backgroundColor: statusStyle.bg }
                    ]}
                >
                    <Text
                        style={[styles.statusText, { color: statusStyle.text }]}
                    >
                        {getStatusLabel(order.status)}
                    </Text>
                </View>
                <Pressable
                    onPress={() => onViewInvoice(order.id)}
                    disabled={isInvoiceLoading}
                    style={styles.invoiceButton}
                >
                    {isInvoiceLoading ? (
                        <ActivityIndicator
                            size='small'
                            color={COLORS.textMuted}
                        />
                    ) : (
                        <DownloadSimple size={18} color={COLORS.textMuted} />
                    )}
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255,255,255,0.02)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
        borderRadius: 10,
        padding: 14
    },
    leftSection: {
        flex: 1,
        marginRight: 8
    },
    productName: {
        fontSize: 14,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.text
    },
    date: {
        fontSize: 12,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textMuted,
        marginTop: 2
    },
    coupon: {
        fontSize: 11,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textDim,
        marginTop: 2
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    amountContainer: {
        alignItems: 'flex-end'
    },
    originalAmount: {
        fontSize: 12,
        fontFamily: 'Satoshi-Regular',
        color: COLORS.textDim,
        textDecorationLine: 'line-through'
    },
    amount: {
        fontSize: 14,
        fontFamily: 'Satoshi-Medium',
        color: COLORS.text
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 100
    },
    statusText: {
        fontSize: 11,
        fontFamily: 'Satoshi-Medium'
    },
    invoiceButton: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    }
})

export default BillingOrderItem