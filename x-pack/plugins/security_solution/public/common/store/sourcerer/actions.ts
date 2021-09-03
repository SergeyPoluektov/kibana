/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import actionCreatorFactory from 'typescript-fsa';
import { TimelineEventsType } from '../../../../common/types/timeline';

import { ManageScopeInit, SourcererScopeName } from './model';

const actionCreator = actionCreatorFactory('x-pack/security_solution/local/sourcerer');

export const setSource = actionCreator<{
  id: SourcererScopeName;
  payload: ManageScopeInit;
}>('SET_SOURCE');

export const setSignalIndexName = actionCreator<{ signalIndexName: string }>(
  'SET_SIGNAL_INDEX_NAME'
);

export const setSourcererScopeLoading = actionCreator<{ id: SourcererScopeName; loading: boolean }>(
  'SET_SOURCERER_SCOPE_LOADING'
);

export const setSelectedKip = actionCreator<{
  id: SourcererScopeName;
  selectedKipId: string;
  selectedPatterns?: string[];
  eventType?: TimelineEventsType;
}>('SET_SELECTED_KIP');

export const initTimelineIndexPatterns = actionCreator<{
  id: SourcererScopeName;
  // TODO: Need selectedKipId
  selectedPatterns: string[];
  eventType?: TimelineEventsType;
}>('INIT_TIMELINE_INDEX_PATTERNS');
