package com.jelaniak.redditcloneproject.service.cloud;

import com.cloudinary.Cloudinary;
import com.cloudinary.Singleton;
import com.cloudinary.utils.ObjectUtils;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Service
public class CloudinaryService {
    private String publicId;

    private final Cloudinary cloudinary = Singleton.getCloudinary();

    public Object uploadCloudinaryMedia(MultipartFile file, ObjectId userId) throws IOException {
        publicId = UUID.randomUUID().toString();

        var response = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.asMap(
                "public_id", "reddit-clone/" + userId + "/" + publicId,
                "use_filename", false,
                "unique_filename", true,
                "resource_type", "auto"
        ));

        return response.get("url");
    }

    public void deleteCloudinaryMedia(String public_id) throws IOException {
        cloudinary.uploader().destroy(public_id, ObjectUtils.emptyMap());
    }

    public String getPublicId() {
        return publicId;
    }
}
