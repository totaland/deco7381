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
