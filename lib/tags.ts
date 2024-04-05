export const getTagColorClasses = (tag: string) => {
  switch (tag) {
    case 'bitcoin':
      return 'text-yellow-600 dark:text-yellow-500'
    case 'money':
      return 'text-green-600 dark:text-green-500'
    default:
      return 'text-blue-600 dark:text-blue-500'
  }
}
