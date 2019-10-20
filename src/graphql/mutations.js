// eslint-disable
// this is an auto generated file. This will be overwritten

export const createPsychologist = `mutation CreatePsychologist($input: CreatePsychologistInput!) {
  createPsychologist(input: $input) {
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
export const updatePsychologist = `mutation UpdatePsychologist($input: UpdatePsychologistInput!) {
  updatePsychologist(input: $input) {
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
export const deletePsychologist = `mutation DeletePsychologist($input: DeletePsychologistInput!) {
  deletePsychologist(input: $input) {
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
export const createPatient = `mutation CreatePatient($input: CreatePatientInput!) {
  createPatient(input: $input) {
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
export const updatePatient = `mutation UpdatePatient($input: UpdatePatientInput!) {
  updatePatient(input: $input) {
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
export const deletePatient = `mutation DeletePatient($input: DeletePatientInput!) {
  deletePatient(input: $input) {
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
export const createAppointment = `mutation CreateAppointment($input: CreateAppointmentInput!) {
  createAppointment(input: $input) {
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
export const updateAppointment = `mutation UpdateAppointment($input: UpdateAppointmentInput!) {
  updateAppointment(input: $input) {
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
export const deleteAppointment = `mutation DeleteAppointment($input: DeleteAppointmentInput!) {
  deleteAppointment(input: $input) {
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
export const createFitness = `mutation CreateFitness($input: CreateFitnessInput!) {
  createFitness(input: $input) {
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
export const updateFitness = `mutation UpdateFitness($input: UpdateFitnessInput!) {
  updateFitness(input: $input) {
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
export const deleteFitness = `mutation DeleteFitness($input: DeleteFitnessInput!) {
  deleteFitness(input: $input) {
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
export const createWellness = `mutation CreateWellness($input: CreateWellnessInput!) {
  createWellness(input: $input) {
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
export const updateWellness = `mutation UpdateWellness($input: UpdateWellnessInput!) {
  updateWellness(input: $input) {
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
export const deleteWellness = `mutation DeleteWellness($input: DeleteWellnessInput!) {
  deleteWellness(input: $input) {
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
