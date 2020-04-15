
  'use strict';
  const { LambdaFlowBuilder } = require('@kumologica/runtime');
  const lambdaFlow = new LambdaFlowBuilder('Email-campaign-flow.json');
  exports.handler = lambdaFlow.handler;
  