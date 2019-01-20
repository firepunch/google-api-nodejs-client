// Copyright 2019 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';

import {content_v2} from './v2';
import {content_v2_1} from './v2.1';

export const VERSIONS = {
  'v2.1': content_v2_1.Content,
  'v2': content_v2.Content,
};

export function content(version: 'v2_1'): content_v2_1.Content;
export function content(options: content_v2_1.Options): content_v2_1.Content;
export function content(version: 'v2'): content_v2.Content;
export function content(options: content_v2.Options): content_v2.Content;
export function content<T = content_v2_1.Content | content_v2.Content>(
    this: GoogleConfigurable,
    versionOrOptions: 'v2_1'|content_v2_1.Options|'v2'|content_v2.Options) {
  return getAPI<T>('content', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
