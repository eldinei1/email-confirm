export default function ConfirmEmailPage() {
  return <p>Redirecionando...</p>;
}

export async function getServerSideProps(context) {
  const { token, email } = context.query;

  if (!token || !email) {
    return {
      props: {
        error: true,
      },
    };
  }

  return {
    redirect: {
      destination: `minhacidadeapp://confirm-email?token=${encodeURIComponent(token)}&email=${encodeURIComponent(email)}`,
      permanent: false,
    },
  };
}
