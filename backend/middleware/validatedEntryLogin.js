//---création de sécurité liée aux données recu

module.exports = (req, res, next) => {

    const regExMail = /^(([a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}))$/;
    const regExPass = /^(([a-zA-Z0-9]{10,20}))$/;

    try {

        const validMAIL = req.body.email.match(regExMail);
        const validPass = req.body.password.match(regExPass);

        if (!validMAIL ||
            !validPass) {
            return res.status(401).json({message :'requête annulée, verifier vos informations liée à votre connexion'});
        };

        next()
    }
    catch (err) {
        res.status(500).json({err})
    }
}