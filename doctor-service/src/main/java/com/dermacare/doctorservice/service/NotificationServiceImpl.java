package com.dermacare.doctorservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dermacare.doctorservice.dto.ExtractFeignMessage;
import com.dermacare.doctorservice.dto.NotificationDTO;
import com.dermacare.doctorservice.dto.NotificationResponse;
import com.dermacare.doctorservice.dto.ResBody;
import com.dermacare.doctorservice.feignclient.NotificationFeign;

import feign.FeignException;

@Service
public class NotificationServiceImpl implements NotificationService {
	
	@Autowired
	private NotificationFeign notificationFeign;
	
	public ResponseEntity<ResBody<List<NotificationDTO>>> notificationToDoctor(String hospitalId,
			 String doctorId){
		try {
		return notificationFeign.notificationtodoctor(hospitalId, doctorId);
		}catch(FeignException e) {
			ResBody<List<NotificationDTO>> res = new ResBody<List<NotificationDTO>>(ExtractFeignMessage.clearMessage(e),e.status(),null);
			return ResponseEntity.status(e.status()).body(res);}
		}
		
		
		public ResponseEntity<?> notificationResponse(NotificationResponse notificationResponse){
			try {
			return notificationFeign.response(notificationResponse); 
				}catch(FeignException e) {
					ResBody<List<NotificationDTO>> res = new ResBody<List<NotificationDTO>>(ExtractFeignMessage.clearMessage(e),e.status(),null);
					return ResponseEntity.status(e.status()).body(res);
				}
					}
}