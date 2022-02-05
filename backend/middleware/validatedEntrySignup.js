//---création de sécurité liée aux données recu

module.exports = (req, res, next) => {

    const regExMail = /^(([a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}))$/;
    const regExPass = /^(([a-zA-Z0-9]{10,20}))$/;
    const regExLastName = /^(([a-zA-Z-]{3,20}))$/;
    const regExFirstName = /^(([a-zA-Z-]{3,20}))$/;
    const regExPseudo = /^(([a-zA-Z0-9._-]{3,15}))$/;

    try {

        const validMAIL = req.body.email.match(regExMail);
        const validPass = req.body.password.match(regExPass);
        const validLastName = req.body.lastName.match(regExLastName);
        const validFirstName = req.body.firstName.match(regExFirstName);
        const validPseudo = req.body.pseudo.match(regExPseudo);

        if (!validMAIL ||
            !validPass ||
            !validLastName ||
            !validFirstName ||
            !validPseudo) {
            return res.status(401).json({message :'requête annulée, verifier vos informations liée à votre inscription'});
        };

        next()
    }
    catch (err) {
        res.status(500).json({err})
    }
}