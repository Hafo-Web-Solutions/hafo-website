const Encore = require('@symfony/webpack-encore');
const fs = require('fs');
const path = require('path');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.js')
    .addEntry('contact', './assets/js/contact.js')
    .addEntry('project', './assets/js/project.js')
    .addEntry('define', './assets/js/define.js')
    .addEntry('plan', './assets/js/plan.js')
    .addEntry('support', './assets/js/support.js')
    .enablePostCssLoader()
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = '3.23';
    });

module.exports = Encore.getWebpackConfig();

