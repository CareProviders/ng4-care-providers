import { Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { APP_CONSTANTS } from '../../../app.constants';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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
        deps: [Http]
      }
    })
  ],
  exports: [TranslateModule]
})
export class I18nModule {}

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http
  , APP_CONSTANTS.paths.I18N_PATH
  , APP_CONSTANTS.formats.I18N_FILE_FORMAT
  );
}
