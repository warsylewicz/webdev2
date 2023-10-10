export default function AdditionalInfo({ name, children }) {
  if (name === process.env.NEXT_PUBLIC_INSTRUCTOR_FIRST_NAME) {
    return <>{children}</>;
  } else {
    return null;
  }
}
