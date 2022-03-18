const router = require('express').Router();
const Vacuna = require('../models/vacuna')
const Persona = require('../models/persona')
const PersonaVacuna = require('../models/persona_vacuna')
router.get('/persona/add', async function (req, res) {
    res.render('index')
})
router.post('/persona/add', async function (req, res) {
    const { cedula, nombreyapellido, sexo, edad, direccion } = req.body
    const persona = await Persona.create({ cedula: cedula, nombreyapellido: nombreyapellido, sexo: sexo, edad: edad, direccion: direccion })
    try {
        res.redirect('/vacuna/add/'+persona.cedula)
    } catch (error) {
        res.redirect('/')
    }
})

router.get('/vacuna/add/:ci', async function (req, res) {
    const persona = await Persona.findOne({ where: { cedula: req.params.ci } })
    const vacunas = await Vacuna.findAll()
    const dosis = await PersonaVacuna.findAll({where:{id_persona:persona.id},include:'vacuna'})
    res.render('vacuna', { persona: persona, vacunas: vacunas, dosis: dosis})
})
router.post('/vacuna/add/:ci', async function (req, res) {
    const persona = await Persona.findOne({ where: { cedula: req.params.ci } })
    //const vacunas = await Vacuna.findAll()
    const { vacuna, dosis } = req.body
    await PersonaVacuna.create({id_persona:persona.id, id_vacuna:vacuna, dosis:dosis})
    res.redirect('/vacuna/add/'+req.params.ci)
})
router.get('/persona/buscar', (req, res) => {
    res.render('buscar')
})
router.post('/persona/buscar', async (req, res) => {
    const { cedula } = req.body
    const persona = await Persona.findOne({ where: { cedula: cedula } })
    if (persona) {
        res.redirect('/vacuna/add/' + persona.cedula)
    }
    else {
        res.redirect('/persona/add')
    }
})

module.exports = router