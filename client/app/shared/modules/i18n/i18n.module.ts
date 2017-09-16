import { NgModule } from '@angular/core';
import { APP_CONSTANTS } from '../../../app.constants';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

/**
 * @author: Shoukath Mohammed
 */

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    HttpClientModule
  ],
  exports: [TranslateModule]
})
export class I18nModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http
  , APP_CONSTANTS.paths.I18N_PATH
  , APP_CONSTANTS.formats.I18N_FILE_FORMAT
  );
}
