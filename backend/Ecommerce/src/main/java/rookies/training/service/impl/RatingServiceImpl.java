package rookies.training.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rookies.training.dto.RatingDTO;
import rookies.training.entity.Product;
import rookies.training.entity.Rating;
import rookies.training.entity.User;
import rookies.training.repository.ProductRepository;
import rookies.training.repository.RatingRepository;
import rookies.training.repository.UserRepository;
import rookies.training.service.RatingService;

@Service
public class RatingServiceImpl implements RatingService {
	
	@Autowired
	RatingRepository ratingRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	ModelMapper modelMapper; 

	@Override
	public List<RatingDTO> getAllRatings() {
		return ratingRepository.findAll().stream().map((rating)->modelMapper.map(rating, RatingDTO.class)).collect(Collectors.toList());
	}

	@Override
	public boolean createRating(RatingDTO ratingDTO) {
		User user=userRepository.findById(ratingDTO.getUserId()).get();
		Product product=productRepository.findById(ratingDTO.getProductId()).get();
		
		if (user==null || product==null)	return false;
		
		//check if product exist
		for (Rating rating: user.getListRating()) {
			if (product.getId()==rating.getProduct().getId()) {
				return false;
			}
		}
		Rating rating=new Rating();
		rating.setComment(ratingDTO.getComment());
		rating.setScore(ratingDTO.getScore());
		rating.setProduct(product);
		rating.setUser(user);
		ratingRepository.save(rating);
		return true;
	}

	@Override
	public boolean updateRating(RatingDTO ratingDTO) {
		User user=userRepository.findById(ratingDTO.getUserId()).get();
		Product product=productRepository.findById(ratingDTO.getProductId()).get();
		
		if (user==null || product==null)	return false;
		
		Rating rating = null;
		//get rating
		for (Rating rat: user.getListRating()) {
			if (product.getId()==rat.getProduct().getId()) {
				rating=rat;
			}
		}
		if (rating == null)	return false;
		rating.setComment(ratingDTO.getComment());
		rating.setScore(ratingDTO.getScore());
		ratingRepository.save(rating);
		return true;
	}

}
