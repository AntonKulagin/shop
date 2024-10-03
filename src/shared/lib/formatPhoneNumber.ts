export function formatPhoneNumber(phone: string): string {
  const matched = phone.match(/^(\+\d)(\d{3})(\d{3})(\d{2})(\d{2})$/);

  if (matched) {
    return `${matched[1]}-${matched[2]}-${matched[3]}-${matched[4]}-${matched[5]}`;
  }
  return phone;
}
