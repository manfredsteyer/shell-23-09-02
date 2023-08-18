var applicationID = '#{NewRelicApplicationId}';

if (!applicationID.startsWith('#{')) {
  NREUM.info = { applicationID, licenseKey: 'a0a5db9e03' };
}
