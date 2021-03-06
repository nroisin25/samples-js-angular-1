/*!
 * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import OktaAuth from '@okta/okta-auth-js/jquery';
import template from './login-redirect.hbs';

export default function render(config) {
  const auth = new OktaAuth({
    url: config.oktaUrl,
    issuer: config.issuer,
    clientId: config.clientId,
    redirectUri: config.redirectUri,
    scopes: ['openid', 'email', 'profile'],
  });

  const container = document.querySelector(config.container);
  container.innerHTML = template();

  const link = document.getElementById('login');
  link.addEventListener('click', () => {
    auth.token.getWithRedirect({ responseType: 'code' });
  });
}
