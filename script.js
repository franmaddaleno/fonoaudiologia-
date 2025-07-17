const semestres = {
  "1° Semestre": [
    { id: "intro_fono", nombre: "INTRODUCCION A LA FONOAUDIOLOGIA" },
    { id: "bases_comunicacion", nombre: "BASES TEORICAS Y PRACTICAS DE LA COMUNICACION HUMANA" },
    { id: "anatomia", nombre: "ANATOMIA" },
    { id: "matematicas", nombre: "MATEMATICAS" },
    { id: "fisica", nombre: "FISICA" },
    { id: "biologia", nombre: "BIOLOGIA MOLECULAR Y CELULAR" }
  ],
  "2° Semestre": [
    { id: "fonetica", nombre: "FONETICA Y FONOLOGIA ESPAÑOLAS" },
    { id: "sociedad", nombre: "SOCIEDAD, CULTURA Y COMUNICACION" },
    { id: "fisica_acustica", nombre: "FISICA Y FONETICA ACUSTICA", prereq: "fisica" },
    { id: "fisiologia1", nombre: "FISIOLOGIA I (CELULAR Y NEUROFISIOLOGIA)", prereq: "fisica" },
    { id: "morfologia", nombre: "MORFOLOGIA", prereq: "biologia" },
    { id: "salud_publica", nombre: "INTRODUCCION A LA SALUD PUBLICA" }
  ],
  "3° Semestre": [
    { id: "cognitivos", nombre: "FUNDAMENTOS COGNITIVOS DE LA COMUNICACION", prereq: "fisiologia1" },
    { id: "morfosintaxis", nombre: "MORFOSINTAXIS ESPAÑOLA" },
    { id: "psicologia_inf", nombre: "PSICOLOGIA DEL DESARROLLO INFANTIL" },
    { id: "fisiologia2", nombre: "FISIOLOGIA II (DE SISTEMAS)", prereq: "fisiologia1" },
    { id: "neurologia", nombre: "NEUROLOGIA", prereq: "fisiologia1" },
    { id: "genetica", nombre: "GENETICA", prereq: "biologia" },
    { id: "promocion_salud", nombre: "PROMOCION EN SALUD", prereq: "salud_publica" }
  ],
  "4° Semestre": [
    { id: "intervencion_bioetica", nombre: "INTERVENCION FONOAUDIOLOGICA Y BIOETICA APLICADA", prereq: "intro_fono" },
    { id: "semantica", nombre: "SEMANTICA Y DISCURSO" },
    { id: "psicologia_adultos", nombre: "PSICOLOGIA DEL DESARROLLO EN ADOLECENTES Y ADULTOS", prereq: "psicologia_inf" },
    { id: "psiquiatria", nombre: "PSIQUIATRIA", prereq: "neurologia" },
    { id: "fisiopato", nombre: "FISIOPATOLOGIA Y FARMACOLOGIA", prereq: "fisiologia2" },
    { id: "epidemiologia", nombre: "EPIDEMIOLOGIA Y BIOESTADISTICA", prereq: "salud_publica" }
  ],
  "5° Semestre": [
    { id: "eval_auditiva", nombre: "EVALUACION Y DIAGNOSTICO AUDITIVO Y VESTIBULAR", prereq: "fisica_acustica" },
    { id: "motricidad_orofacial", nombre: "MOTRICIDAD OROFACIAL", prereq: "fisiopato" },
    { id: "eval_voz", nombre: "EVALUACION Y DIAGNOSTICO DE LA VOZ HUMANA", prereq: "bases_comunicacion" },
    { id: "diag_salud", nombre: "DIAG. DE SITUACION DE SALUD Y ORGANIZACION", prereq: "salud_publica" },
    { id: "gestion1", nombre: "GESTION I" },
    { id: "metodos_inv", nombre: "METODOS DE INVESTIGACION CUALITATIVOS Y CUANTITATIVOS", prereq: "epidemiologia" },
    { id: "modulo_i", nombre: "MODULO INTEGRADO INTERDISCIPLINARIO MULTIPROFESIONAL I" }
  ],
  "6° Semestre": [
    { id: "intervencion_auditiva", nombre: "INTERVENCION AUDITIVA Y VESTIBULAR", prereq: "eval_auditiva" },
    { id: "intervencion_habla", nombre: "INTERVENCION DEL HABLA", prereq: "neurologia" },
    { id: "intervencion_deglucion", nombre: "INTERVENCION DE LA DEGLUCION Y MOTRICIDAD OROFACIAL", prereq: "neurologia" },
    { id: "terapia_voz", nombre: "TERAPIA Y TECNICA DE LA VOZ HUMANA", prereq: "eval_voz" },
    { id: "eval_comunicacion", nombre: "EVALUACION Y DIAGNOSTICO DE LA COMUNICACION EN NIÑOS Y ADOLECENTES EN CONTEXTO CLINICO Y EDUCATIVO", prereq: "psicologia_adultos" },
    { id: "gestion2", nombre: "GESTION II", prereq: "gestion1" },
    { id: "diseno_proyecto", nombre: "DISEÑO DE PROYECTO DE INVESTIGACION", prereq: "metodos_inv" }
  ],
  "7° Semestre": [
    { id: "terapia_ninos", nombre: "TERAPIA DE LA COMUNICACION EN NIÑOS Y ADOLECENTES EN EL CONTEXTO CLINICO EDUCATIVO", prereq: "eval_auditiva" },
    { id: "intervencion_adultos", nombre: "INTERVENCION DEL LENGUAJE Y COMUNICACION EN ADULTOS", prereq: "neurologia" },
    { id: "fonoaudiologia_mayor", nombre: "INTERVENCION FONOAUDIOLOGICA EN EL ADULTO MAYOR", prereq: "intervencion_habla" },
    { id: "ling_aplicada", nombre: "ELECTIVO DE LINGUISTICA APLICADA", prereq: "semantica" },
    { id: "integrado_primaria", nombre: "INTEGRADO CLINICO EN SALUD PRIMARIA", prereq: "intervencion_deglucion" },
    { id: "proyecto1", nombre: "PROYECTO DE INVESTIGACION I", prereq: "diseno_proyecto" }
  ],
  "8° Semestre": [
    { id: "integrado_educativo", nombre: "INTEGRADO EDUCATIVO EN NIÑOS", prereq: "terapia_ninos" },
    { id: "intervencion_cognitiva", nombre: "INTERVENCION COGNITIVA EN ADULTOS", prereq: "fonoaudiologia_mayor" },
    { id: "integrado_adultos", nombre: "INTEGRADO CLINICO EN ADULTOS", prereq: "intervencion_adultos" },
    { id: "curso_avanzado", nombre: "CURSO AVANZADO", prereq: "fonoaudiologia_mayor" },
    { id: "proyecto2", nombre: "PROYECTO DE INVESTIGACION II", prereq: "proyecto1" },
    { id: "modulo_ii", nombre: "MODULO INTEGRADO INTERDISCIPLINARIO MULTIPROFESIONAL II", prereq: "modulo_i" }
  ]
};

function crearMalla() {
  const grid = document.querySelector('.grid');
  for (const [semestre, ramos] of Object.entries(semestres)) {
    const box = document.createElement('div');
    box.classList.add('semestre');
    box.innerHTML = `<h2>${semestre}</h2>`;
    ramos.forEach(ramo => {
      const div = document.createElement('div');
      div.classList.add('ramo');
      div.dataset.id = ramo.id;
      div.textContent = ramo.nombre;
      if (ramo.prereq) {
        div.dataset.prerq = ramo.prereq;
        div.classList.add('locked');
      }
      box.appendChild(div);
    });
    grid.appendChild(box);
  }
}

function marcarDesmarcar(ramo) {
  if (ramo.classList.contains('aprobado')) {
    ramo.classList.remove('aprobado');
    localStorage.removeItem(ramo.dataset.id);
  } else {
    ramo.classList.add('aprobado');
    localStorage.setItem(ramo.dataset.id, 'aprobado');
  }
}

function desbloquearRamos() {
  document.querySelectorAll('.ramo.locked').forEach(ramo => {
    const prereq = ramo.dataset.prerq;
    if (localStorage.getItem(prereq) === 'aprobado') {
      ramo.classList.remove('locked');
      ramo.style.background = '#f8bbd0';
      ramo.style.cursor = 'pointer';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  crearMalla();
  document.querySelectorAll('.ramo').forEach(ramo => {
    if (localStorage.getItem(ramo.dataset.id) === 'aprobado') {
      ramo.classList.add('aprobado');
    }
    ramo.addEventListener('click', () => {
      if (!ramo.classList.contains('locked')) {
        marcarDesmarcar(ramo);
        desbloquearRamos();
      }
    });
  });
  desbloquearRamos();
});


