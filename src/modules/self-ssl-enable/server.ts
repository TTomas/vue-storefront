import { serverHooks } from '@vue-storefront/core/server/hooks'
import syswidecas from 'syswide-cas'
import * as fs from 'fs';

const CERTS_DIRECTORY = 'config/certs'

/**
 * load certificates from certs directory and consider them trusted
 */

serverHooks.afterApplicationInitialized(() => {
  if (fs.existsSync(CERTS_DIRECTORY)) {
    syswidecas.addCAs(CERTS_DIRECTORY);
    console.log('Halkyon addCAs');
  }
})
