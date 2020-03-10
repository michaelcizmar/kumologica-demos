
  'use strict';
  const { LambdaFlowBuilder } = require('@kumologica/runtime');
  const lambdaFlow = new LambdaFlowBuilder('kumo-secondapiflow-flow.json');
  exports.handler = lambdaFlow.handler;
  