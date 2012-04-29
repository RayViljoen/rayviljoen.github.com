<?php

// Move _site contents to rayviljoen.github.com
// Also remove everything except .git, .gitignore & .nojekyll

// Paths
$jekyllSiteDir = './_site/';
$blogDir = './rayviljoen.github.com/';
$gitHub = 'git@github.com:RayViljoen/rayviljoen.github.com.git';

// Ignore these
$ignore = array(

	'.',
	'..',
	'.git',
	'.gitignore',
	'.nojekyll',
	'.DS_Store'
);


// Clear out blog
echo "\nClearing blog contents...\n";

// Check is dir
if (! is_dir($blogDir)) {
    throw new InvalidArgumentException('$blogDir must be a directory');
}

// Add closing /
if (substr($blogDir, strlen($blogDir) - 1, 1) != '/') {
    $blogDir .= '/';
}

if ($handle = opendir($blogDir)) {

	// Loop over dir
	while (false !== ($file = readdir($handle))) {

		// Skip over ignored files
	    if(! in_array($file, $ignore)) {
	    	
	    	// Remove everything
	    	echo "Deleting: ".$file."\n";
	    	shell_exec("rm -rf {$blogDir}{$file}");
		}
	}

	closedir($handle);
}

// Copy Jekyll _site contents to $blogDir

echo "Copying new Jekyll site to blog $blogDir...\n\n";

shell_exec("cp -r {$jekyllSiteDir} {$blogDir}");

// Commit and push new blog

@$now = date('j F @ H:i');
echo shell_exec("cd {$blogDir} && git add -A && git commit -m 'Auto push: {$now}' && git push origin master");

echo "Complete.\n";