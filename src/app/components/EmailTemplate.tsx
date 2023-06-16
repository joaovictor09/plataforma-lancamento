interface EmailTemplateProps {
  firstName: string
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  const emailStyle = {
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  }

  const titleStyle = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  }

  const contentStyle = {
    color: '#555',
    fontSize: '16px',
    marginBottom: '20px',
  }

  const buttonContainerStyle = {
    textAlign: 'center' as 'center',
  }

  const buttonStyle = {
    backgroundColor: '#0084ff',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '10px 20px',
    textDecoration: 'none',
  }

  const noteStyle = {
    color: '#777',
    fontSize: '14px',
    marginTop: '20px',
  }

  return (
    <div style={emailStyle}>
      <h1 style={titleStyle}>Quase lá, {firstName}</h1>
      <p style={contentStyle}>
        Sua inscrição foi bem-sucedida!
        <br />
        Parabéns por dar o primeiro passo para participar do evento.
        <br />
        Para completar 100% da sua participação, precisamos que você entre no
        grupo do WhatsApp.
      </p>
      <div style={buttonContainerStyle}>
        <a
          href="https://api.whatsapp.com/send?phone=5548998686043"
          style={buttonStyle}
        >
          Entrar no grupo do WhatsApp
        </a>
      </div>
      <p style={noteStyle}>
        OBS: Caso não consiga clicar no botão acima, copie e cole o link a
        seguir no seu navegador:
        <br />
        https://api.whatsapp.com/send?phone=5548998686043
      </p>
      <p style={noteStyle}>Atenciosamente,</p>
      <p style={noteStyle}>Equipe do Evento</p>
    </div>
  )
}
