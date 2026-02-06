import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { getPassedTime } from './index'
import dayjs from 'dayjs'

describe('getPassedTime', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('should return seconds ago for times less than 60 seconds', () => {
        const now = dayjs()
        vi.setSystemTime(now.toDate())

        const thirtySecondsAgo = now.subtract(30, 'seconds').toISOString()
        expect(getPassedTime(thirtySecondsAgo)).toBe('30 seconds ago')
    })

    it('should return minutes ago for times between 1-59 minutes', () => {
        const now = dayjs()
        vi.setSystemTime(now.toDate())

        const fiveMinutesAgo = now.subtract(5, 'minutes').toISOString()
        expect(getPassedTime(fiveMinutesAgo)).toBe('5 minutes ago')

        const thirtyMinutesAgo = now.subtract(30, 'minutes').toISOString()
        expect(getPassedTime(thirtyMinutesAgo)).toBe('30 minutes ago')
    })

    it('should return hours ago for times between 1-23 hours', () => {
        const now = dayjs()
        vi.setSystemTime(now.toDate())

        const twoHoursAgo = now.subtract(2, 'hours').toISOString()
        expect(getPassedTime(twoHoursAgo)).toBe('2 hours ago')

        const twelveHoursAgo = now.subtract(12, 'hours').toISOString()
        expect(getPassedTime(twelveHoursAgo)).toBe('12 hours ago')
    })

    it('should return days ago for times 24+ hours', () => {
        const now = dayjs()
        vi.setSystemTime(now.toDate())

        const oneDayAgo = now.subtract(1, 'day').toISOString()
        expect(getPassedTime(oneDayAgo)).toBe('1 days ago')

        const fiveDaysAgo = now.subtract(5, 'days').toISOString()
        expect(getPassedTime(fiveDaysAgo)).toBe('5 days ago')
    })

    it('should handle edge case at exactly 60 seconds', () => {
        const now = dayjs()
        vi.setSystemTime(now.toDate())

        const sixtySecondsAgo = now.subtract(60, 'seconds').toISOString()
        expect(getPassedTime(sixtySecondsAgo)).toBe('1 minutes ago')
    })

    it('should handle edge case at exactly 1 hour', () => {
        const now = dayjs()
        vi.setSystemTime(now.toDate())

        const oneHourAgo = now.subtract(1, 'hour').toISOString()
        expect(getPassedTime(oneHourAgo)).toBe('1 hours ago')
    })
})

