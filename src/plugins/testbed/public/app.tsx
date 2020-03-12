/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { AppMountParameters } from 'kibana/public';
import ReactDOM from 'react-dom';
import React from 'react';
import {
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiButton,
  EuiPageContent,
  EuiPageContentBody,
} from '@elastic/eui';
import './app.css';

export const renderApp = ({ appBasePath, element }: AppMountParameters) => {
  ReactDOM.render(
    <React.Fragment>
      <EuiPageBody>
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>This is a very big red button!</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent>
          <EuiPageContentBody>
            <EuiTitle size="l">
              <h2>Do not press</h2>
            </EuiTitle>
            <EuiButton id="red-button" onClick={() => (window as any).throwErrors()} />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </React.Fragment>,
    element
  );

  return () => ReactDOM.unmountComponentAtNode(element);
};
