const core = require("@actions/core");
// const github = require("@actions/github");
const exec = require("@actions/exec");

const run = () => {
  // 1) Get some input values
  const bucket = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true });
  const distFolder = core.getInput("dist-folder", { required: true });

  // 2) Upload files
  // You can use SDK provided by the cloud provider,
  // in this case AWS

  // Using exec, to run command that can run on the
  // command line
  // Running AWS CLI command
  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  core.notice("Hello from my custom JavaScript Action!");
};

run();
