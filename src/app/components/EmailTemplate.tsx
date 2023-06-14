interface EmailTemplateProps {
  firstName: string
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontSize: '20px',
      }}
    >
      <h1 className="text-zinc-500">Olá, {firstName}, como vai?</h1>
      <span style={{ display: 'block' }}>
        Sua inscrição está quase concluída.
      </span>
      <span>
        Para concluir a sua inscrição entre no nosso grupo do whatsapp clicando
        no botão abaixo.
      </span>
      <a
        href="#"
        style={{
          padding: '4px 20px',
          backgroundColor: 'green',
          display: 'flex',
          borderRadius: '4px',
          color: 'white',
          width: 'max-content',
          fontWeight: 'bold',
          marginTop: '12px',
        }}
      >
        Entrar no grupo
      </a>
    </div>
  )
}
