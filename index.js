exports.handler = async (event) => {
  const axios = require('axios')
  const { Webhook, MessageBuilder } = require('discord-webhook-node')
  const hook = new Webhook(process.env.DISCORD_WEBHOOK_URL)

  try {
    const res = await axios.get('https://zenquotes.io/api/random/')
    const { q, a } = res.data[0]

    const format = new MessageBuilder()
      .setTitle('Quote of the day')
      .setDescription(`"${q}"`)
      .setColor('#00b0f4')
      .setFooter(a)
    await hook.send(format)

    return {
      statusCode: 200,
      body: 'success',
    }
  } catch (e) {
    return {
      statusCode: e.statusCode,
      body: `error: ${e}`,
    }
  }
}
