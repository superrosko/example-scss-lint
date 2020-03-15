/**
 * Импортируем необходимые пакеты
 */
import gulp from 'gulp';
import stylelint from 'gulp-stylelint';

/**
 * Указываем пути к файлам для проверки
 * @type {{scss: string}}
 */
const paths = {
  scss: './src/**/*.scss',
};

/**
 * Test Scss lint
 * @return {*}
 */
function testScssLint() {
  return gulp.src(paths.scss).
    pipe(stylelint({
      reporters: [
        {
          failAfterError: true,
          formatter: 'string',
          console: true,
        },
      ],
    }));
}

/**
 * Экспортируем методы
 */
const tests = gulp.parallel(testScssLint);
exports.tests = tests;

export default tests;
