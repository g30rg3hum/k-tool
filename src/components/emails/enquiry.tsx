interface Props {
  name: string;
  email: string;
  message: string;
}
export function Enquiry({ name, email, message }: Props) {
  return (
    <div>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <br />
      <p>
        <strong>Message:</strong> {message}
      </p>
    </div>
  );
}
