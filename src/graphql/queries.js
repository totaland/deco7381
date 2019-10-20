// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPsychologist = `query GetPsychologist($id: ID!) {
  getPsychologist(id: $id) {
    id
    email
    phone
    patients {
      items {
        id
        email
        phone
      }
      nextToken
    }
    appointments {
      id
      patient {
        id
        email
        phone
      }
      psychologist {
        id
        email
        phone
      }
      purpose
      time
    }
  }
}
`;
export const listPsychologists = `query ListPsychologists(
  $filter: ModelPsychologistFilterInput
  $limit: Int
  $nextToken: String
) {
  listPsychologists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      phone
      patients {
        nextToken
      }
      appointments {
        id
        purpose
        time
      }
    }
    nextToken
  }
}
`;
export const getPatient = `query GetPatient($id: ID!) {
  getPatient(id: $id) {
    id
    email
    phone
    appointments {
      items {
        id
        purpose
        time
      }
      nextToken
    }
    psychologist {
      id
      email
      phone
      patients {
        nextToken
      }
      appointments {
        id
        purpose
        time
      }
    }
    fitness {
      items {
        id
        depression
        anxiety
        stress
      }
      nextToken
    }
    wellness {
      items {
        id
        distress
        interpersonal_relation
        social_role
      }
      nextToken
    }
  }
}
`;
export const listPatients = `query ListPatients(
  $filter: ModelPatientFilterInput
  $limit: Int
  $nextToken: String
) {
  listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      phone
      appointments {
        nextToken
      }
      psychologist {
        id
        email
        phone
      }
      fitness {
        nextToken
      }
      wellness {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getAppointment = `query GetAppointment($id: ID!) {
  getAppointment(id: $id) {
    id
    patient {
      id
      email
      phone
      appointments {
        nextToken
      }
      psychologist {
        id
        email
        phone
      }
      fitness {
        nextToken
      }
      wellness {
        nextToken
      }
    }
    psychologist {
      id
      email
      phone
      patients {
        nextToken
      }
      appointments {
        id
        purpose
        time
      }
    }
    purpose
    time
  }
}
`;
export const listAppointments = `query ListAppointments(
  $filter: ModelAppointmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      patient {
        id
        email
        phone
      }
      psychologist {
        id
        email
        phone
      }
      purpose
      time
    }
    nextToken
  }
}
`;
export const getFitness = `query GetFitness($id: ID!) {
  getFitness(id: $id) {
    id
    depression
    anxiety
    stress
    patient {
      id
      email
      phone
      appointments {
        nextToken
      }
      psychologist {
        id
        email
        phone
      }
      fitness {
        nextToken
      }
      wellness {
        nextToken
      }
    }
  }
}
`;
export const listFitnesss = `query ListFitnesss(
  $filter: ModelFitnessFilterInput
  $limit: Int
  $nextToken: String
) {
  listFitnesss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      depression
      anxiety
      stress
      patient {
        id
        email
        phone
      }
    }
    nextToken
  }
}
`;
export const getWellness = `query GetWellness($id: ID!) {
  getWellness(id: $id) {
    id
    distress
    interpersonal_relation
    social_role
    patient {
      id
      email
      phone
      appointments {
        nextToken
      }
      psychologist {
        id
        email
        phone
      }
      fitness {
        nextToken
      }
      wellness {
        nextToken
      }
    }
  }
}
`;
export const listWellnesss = `query ListWellnesss(
  $filter: ModelWellnessFilterInput
  $limit: Int
  $nextToken: String
) {
  listWellnesss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      distress
      interpersonal_relation
      social_role
      patient {
        id
        email
        phone
      }
    }
    nextToken
  }
}
`;
