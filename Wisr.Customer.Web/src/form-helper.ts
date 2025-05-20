export function parseForm(target: EventTarget & HTMLFormElement) {
  const formData = new FormData(target);
  const data = Object.entries(Object.fromEntries(formData.entries())).reduce<
    Record<string, string | undefined>
  >((fields, [key, value]) => {
    fields[key] = value.toString();
    return fields;
  }, {});
  return data;
}
