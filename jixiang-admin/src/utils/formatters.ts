import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';

dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

export function formatCurrency(amount: number): string {
  return `¥${amount.toLocaleString('zh-CN')}`;
}

export function formatDate(date: string, format = 'YYYY-MM-DD'): string {
  return dayjs(date).format(format);
}

export function formatDateTime(date: string): string {
  return dayjs(date).format('YYYY-MM-DD HH:mm');
}

export function formatPercent(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

export function formatCompactNumber(num: number): string {
  if (num >= 10000) return `${(num / 10000).toFixed(1)}万`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
  return num.toString();
}

export function getCurrentDate(): string {
  return dayjs().format('YYYY年M月D日');
}

export function getRelativeTime(date: string): string {
  const d = dayjs(date);
  const now = dayjs();
  const diff = now.diff(d, 'hour');
  if (diff < 1) return '刚刚';
  if (diff < 24) return `${diff}小时前`;
  const days = now.diff(d, 'day');
  if (days < 30) return `${days}天前`;
  return formatDate(date);
}
