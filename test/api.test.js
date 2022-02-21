const request = require('supertest')

const app = require('../index')

//Testing lista de odontologos
describe('/GET /api/odontologo/', () => {
    it('Responde con json el contenido de la lista de odontologos', done => {
        request(app)
            .get('/api/odontologo/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing lista de sede
describe('/GET /api/sede/', () => {
    it('Responde con json el contenido de la lista de sedes', done => {
        request(app)
            .get('/api/sede/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing lista de citas
describe('/GET /api/cita/', () => {
    it('Responde con json el contenido de la lista de citas', done => {
        request(app)
            .get('/api/cita/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing lista de tipo cita
describe('/GET /api/tipoCita/', () => {
    it('Responde con json el contenido de la lista de tipo cita', done => {
        request(app)
            .get('/api/tipoCita/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing lista de observacion
describe('/GET /api/observacion/', () => {
    it('Responde con json el contenido de la lista de observaciones', done => {
        request(app)
            .get('/api/observacion/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing lista de especializacion
describe('/GET /api/especializacion/', () => {
    it('Responde con json el contenido de la lista de especializacion', done => {
        request(app)
            .get('/api/especializacion/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing lista de roles
describe('/GET /api/rol/', () => {
    it('Responde con json el contenido de la lista de roles', done => {
        request(app)
            .get('/api/rol/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing por id cupo
describe('/GET /api/cupo/:id', () => {
    it('Responder en formato json No hay token en la petición', done => {
        request(app)
            .get('/api/cupo/01')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .expect('{"ok":false,"msg":"No hay token en la petición"}', done);
    })
})

//Testing crear odontologo
describe('/POST /api/odontologo/create', () => {
    it('Respuesta odontologo creado', done => {
        const data = {
            nombre: 'Daniela',
            apellidos: 'Alarcon Sepulveda',
            email: 'danielaalarcon@gmail.com',
            telefono: 3224311875,
            documento: 1002487512,
            fechaNacimiento: '2000/08/30',
            password: '123456',
            estado: true
        } 
        request(app)
            .post('/api/odontologo/create')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing crear sede
describe('/POST /api/sede/create', () => {
    it('Respuesta sede creada', done => {
        const data = {
            nombre: 'Sede Centro',
            direccion: 'kra 5 No. 35-08',
            telefono: 8761425,
            horaInicioSede: '11:43 am',
            horaFinSede: '12:00 pm',
            estado: true 
        }  
            request(app)
            .post('/api/sede/create')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing crear tipo de cita
describe('/POST /api/tipoCita/create', () => {
    it('Respuesta tipo de cita creada', done => {
        const data = {
            nombre: 'Cita por primera vez odontologia'
        }  
            request(app)
            .post('/api/tipoCita/create')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing crear rol
describe('/POST /api/rol/create', () => {
    it('Respuesta rol creado', done => {
        const data = {
            nombre: 'Auxiliar medico'
        }  
            request(app)
            .post('/api/rol/create')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing crear especializacion
describe('/POST /api/especializacion/create', () => {
    it('Respuesta especializacion creado', done => {
        const data = {
            nombre: 'Odontopediatría'
        }  
            request(app)
            .post('/api/especializacion/create')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing crear observacion
describe('/POST /api/observacion/create', () => {
    it('Respuesta observacion creada', done => {
        const data = {
            observacion: 'Se observa caries dental diente 15',
            fecha: '2022/02/21'
        }  
            request(app)
            .post('/api/observacion/create')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing crear cita
describe('/POST /api/cita/create', () => {
    it('Respuesta cita creada', done => {
            request(app)
            .post('/api/cita/create')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing actualizar odontologo
describe('/PUT /api/odontologo/update/:id', () => {
    it('Respuesta odontologo Actualizado', done => {
        const data = {
            nombre: 'Sergio',
            apellidos: 'Rojas',
            email: 'sergiorojas@gmail.com',
            telefono: 3224781875,
            documento: 1036487512,
            fechaNacimiento: '2000/08/30',
            password: '123456',
            estado: true
        } 
        request(app)
            .put('/api/odontologo/update/:id')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing actualizar sede
describe('/PUT /api/sede/update/:id', () => {
    it('Respuesta sede actualizada', done => {
        const data = {
            nombre: 'Sede NeivaCentro',
            direccion: 'kra 6 No. 35-08',
            telefono: 8781425,
            horaInicioSede: '11:30 am',
            horaFinSede: '12:00 pm',
            estado: true 
        }  
            request(app)
            .put('/api/sede/update/:id')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing actualizar tipo de cita
describe('/PUT /api/tipoCita/update/:id', () => {
    it('Respuesta tipo de cita actualizada', done => {
        const data = {
            nombre: 'Cita por segunda vez odontologia'
        }  
            request(app)
            .put('/api/tipoCita/update/:id')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing actualizar rol
describe('/PUT /api/rol/update/:id', () => {
    it('Respuesta rol actualizado', done => {
        const data = {
            nombre: 'Auxiliar odontologico'
        }  
            request(app)
            .put('/api/rol/update/:id')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing actualizar especializacion
describe('/PUT /api/especializacion/update/:id', () => {
    it('Respuesta especializacion actualizada', done => {
        const data = {
            nombre: 'Odontopediatríca'
        }  
            request(app)
            .put('/api/especializacion/update/:id')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})

//Testing actualizar observacion
describe('/PUT /api/observacion/update/:id', () => {
    it('Respuesta observacion actualizada', done => {
        const data = {
            observacion: 'Se observa diente 15 sano',
            fecha: '2022/02/20'
        }  
            request(app)
            .put('/api/observacion/update/:id')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
    })
})
