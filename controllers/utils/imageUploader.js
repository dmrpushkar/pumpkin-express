const multer = require('multer');

module.exports.image = {
    storage:function(){
        const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './pumpkin-uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
      })
      return storage;
    },
    allowedImage:function(req, file, cb) {
        // Accept images only
        if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
            req.fileValidationError = 'Only image files are allowed!';
            return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
    },
};
