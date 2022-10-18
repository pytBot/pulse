const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
//Set-ExecutionPolicy RemoteSigned -Scope Process - Разрешение на запуск скриптов


// Static server(запускает сервер(go live))
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "src"                    // папка с файлом index.html
        }
    });
});

// Compil Sass(компилирует сас файлы(Watch Sass))
gulp.task('styles', function () {
    return gulp.src("src/sass/**/*.+(scss|sass)")                                  // читает все файлы с расширение scss, sass
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))   // использует галп сасс
        .pipe(rename({                                                          // переименование файлов
            prefix: "",
            suffix: ".min"
        }))
        .pipe(autoprefixer({                                                    // автопрефикс для последних 2 версий любого браузера
            browsers: ['last 2 versions'],
			cascade: false
		}))
        .pipe(cleanCSS({compatibility: 'ie8'}))                                 // очистка файла
        .pipe(gulp.dest("src/css"))                                             // сохраняет результат в эту папку
        .pipe(browserSync.stream());                                            // перезагружает страницу
})

// Наблюдатель
gulp.task('watch', function () {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles')) // отслеживает изменения в стилях
    gulp.watch("src/*.html").on("change", browserSync.reload)     // отслеживает изменения в html файлах
})

//Запуск задач по дефолту
gulp.task('default', gulp.parallel('watch', 'server', 'styles'));