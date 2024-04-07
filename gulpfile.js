import gulp from 'gulp'
import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminOptipng from 'imagemin-optipng';
import gulpWebp from 'gulp-webp';

// Task for optimizing images
gulp.task('optimize-images', () =>
        gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
    );



// Task for converting images to WebP
gulp.task('convert-webp', () =>
        gulp.src('dist/images/*')
        .pipe(gulpWebp())
        .pipe(gulp.dest('dist/images'))
    );


// Default task that runs both tasks
gulp.task('default', gulp.series('optimize-images', 'convert-webp'));
