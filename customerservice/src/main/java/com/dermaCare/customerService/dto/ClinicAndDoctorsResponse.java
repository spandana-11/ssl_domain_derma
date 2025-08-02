package com.dermaCare.customerService.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ClinicAndDoctorsResponse {
private ClinicDTO clinic;
private List<DoctorsDTO> doctors;
}