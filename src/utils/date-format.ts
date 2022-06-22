import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

// 时间格式化js库：dayjs（轻量-推荐）momentjs（包比较大-不推荐）
// 默认dayjs不包含utc，使用extend扩展
dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

// 转化utc格式
export function formatUTCString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).utcOffset(8).format(format)
}

// 转化时间戳格式
export function formatTimestamp(
  timestamp: number,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.unix(timestamp).format(format)
}
