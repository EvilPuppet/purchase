const Mail = require('../services/Mail')


class PurchaseMail {
  get key() {
    return 'PurchaseMail'
  }

  async handle(job, done) {
    const { ad, user, content } = job.data

    await Mail.sendMail({
      from: '"Guilherme Motta" <zevilpuppet@gmail.com>',
      to: purchaseAd.author.email,
      subject: `Solicitacao de  compra ${purchaseAd.title}`,
      template: 'purchase',
      content: {user, content, ad},
    })

    return done()
  }
}

module.exports = new PurchaseMail()
