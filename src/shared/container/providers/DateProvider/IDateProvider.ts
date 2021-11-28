interface IDateProvider {
    compareInHours(start_time: Date, end_date: Date): number
    convertToUTC(date: Date): string
    dateNow(): Date
}

export { IDateProvider }