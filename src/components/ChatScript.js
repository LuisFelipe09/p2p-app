export const chatScript = [
    {
      role: 'assistant',
      content: '¿Cuál es tu nombre o nombre de usuario en la red P2P?',
      key: 'username',
    },
    {
      role: 'assistant',
      content: '¿Podrías proporcionar tu correo electrónico para que podamos contactarte?',
      key: 'email',
    },
    {
      role: 'assistant',
      content: '¿Tienes un ID de ticket previo para este problema?',
      key: 'ticketId',
    },
    {
      role: 'assistant',
      content: '¿Cuándo ocurrió el problema? Proporciona la fecha y hora, si es posible.',
      key: 'incidentDateTime',
    },
    {
      role: 'assistant',
      content: '¿Podrías describir el problema que estás experimentando?',
      key: 'problemDescription',
    },
    {
      role: 'assistant',
      content: '¿Qué tipo de problema estás enfrentando? (Conexión, Transferencia de Activos, Seguridad, Configuración, u Otro. Si es otro, por favor especifica.)',
      key: 'problemType',
    },
    {
      role: 'assistant',
      content: '¿Cómo calificarías la gravedad del problema? (Alta, Media o Baja)',
      key: 'problemSeverity',
    },
  ];
  