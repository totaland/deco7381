// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePsychologist = `subscription OnCreatePsychologist {
  onCreatePsychologist {
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
export const onUpdatePsychologist = `subscription OnUpdatePsychologist {
  onUpdatePsychologist {
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
export const onDeletePsychologist = `subscription OnDeletePsychologist {
  onDeletePsychologist {
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
export const onCreatePatient = `subscription OnCreatePatient {
  onCreatePatient {
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
export const onUpdatePatient = `subscription OnUpdatePatient {
  onUpdatePatient {
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
export const onDeletePatient = `subscription OnDeletePatient {
  onDeletePatient {
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
export const onCreateAppointment = `subscription OnCreateAppointment {
  onCreateAppointment {
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
export const onUpdateAppointment = `subscription OnUpdateAppointment {
  onUpdateAppointment {
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
export const onDeleteAppointment = `subscription OnDeleteAppointment {
  onDeleteAppointment {
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
export const onCreateFitness = `subscription OnCreateFitness {
  onCreateFitness {
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
export const onUpdateFitness = `subscription OnUpdateFitness {
  onUpdateFitness {
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
export const onDeleteFitness = `subscription OnDeleteFitness {
  onDeleteFitness {
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
export const onCreateWellness = `subscription OnCreateWellness {
  onCreateWellness {
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
export const onUpdateWellness = `subscription OnUpdateWellness {
  onUpdateWellness {
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
export const onDeleteWellness = `subscription OnDeleteWellness {
  onDeleteWellness {
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
