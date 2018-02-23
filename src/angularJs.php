<?php
//echo base64_decode($_GET['encry']);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Request-Headers: *");

$aboutArr =  $aboutResult = array();
$technicalDetailsArr = $technicalDetailsResult = $result = array();
$projectDetailsArr = $projectDetailsResult = array();
$projectDescriptionArr = $projectDescriptionResult = array();
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
//echo "<pre>";print_r($request);exit;
if(isset($request->id)){
	$id = trim($request->id);
}else{
	$id = '';
}

if(isset($request->pid)){
	$pid = trim($request->pid);
}else{
	$pid = '';
}

if($id == ''){
	//User Details
	$aboutArr[] = array("aboutId"=>1, "aboutName"=>"Sai Ram", "aboutMobile" => 9494888392, "aboutEmail" => "SAIRAM@COMAKEIT.COM");
	$aboutArr[] = array("aboutId"=>2, "aboutName"=>"Maruthi", "aboutMobile" => 9494888392, "aboutEmail" => "MARUTHI@COMAKEIT.COM");
	$aboutArr[] = array("aboutId"=>3, "aboutName"=>"Ram Mohan", "aboutMobile" => 9494888392, "aboutEmail" => "RAM@COMAKEIT.COM");
	$aboutArr[] = array("aboutId"=>4, "aboutName"=>"Lalita", "aboutMobile" => 9494888392, "aboutEmail" => "LALITA@COMAKEIT.COM");
	$aboutArr[] = array("aboutId"=>5, "aboutName"=>"Srinath", "aboutMobile" => 9494888392, "aboutEmail" => "SRINATH@COMAKEIT.COM");
	foreach($aboutArr as $aboutArr){
		$aboutResult['about'][] = $aboutArr;
	}
	echo json_encode($aboutResult);
}else{
	//User Details
	$aboutArr[] = array("aboutId"=>1, "aboutName"=>"Sai Ram", "aboutMobile" => 9494888392, "aboutEmail" => "SAIRAM@COMAKEIT.COM");
	$aboutArr[] = array("aboutId"=>2, "aboutName"=>"Maruthi", "aboutMobile" => 9494888392, "aboutEmail" => "MARUTHI@COMAKEIT.COM");
	$aboutArr[] = array("aboutId"=>3, "aboutName"=>"Ram Mohan", "aboutMobile" => 9494888392, "aboutEmail" => "RAM@COMAKEIT.COM");
	$aboutArr[] = array("aboutId"=>4, "aboutName"=>"Lalita", "aboutMobile" => 9494888392, "aboutEmail" => "LALITA@COMAKEIT.COM");
	$aboutArr[] = array("aboutId"=>5, "aboutName"=>"Srinath", "aboutMobile" => 9494888392, "aboutEmail" => "SRINATH@COMAKEIT.COM");
	foreach($aboutArr as $aboutArr){
		if($id == $aboutArr['aboutId']){
			$aboutResult['about'][] = $aboutArr;
		}
	}
	//Technical Details
	$technicalDetailsArr[] = array("technicalId" => 1, "technicalSkill" => 'PHP', "technicalWorking" => 3.5, "aboutId" => 1);
	$technicalDetailsArr[] = array("technicalId" => 2, "technicalSkill" => 'Yii', "technicalWorking" => 3.5, "aboutId" => 1);
	$technicalDetailsArr[] = array("technicalId" => 3, "technicalSkill" => 'Oracle', "technicalWorking" => 3.5, "aboutId" => 1);
	$technicalDetailsArr[] = array("technicalId" => 4, "technicalSkill" => 'JQuey', "technicalWorking" => 3.5, "aboutId" => 1);
	$technicalDetailsArr[] = array("technicalId" => 5, "technicalSkill" => 'Angular', "technicalWorking" => 0.5, "aboutId" => 2);
	$technicalDetailsArr[] = array("technicalId" => 6, "technicalSkill" => 'Solr', "technicalWorking" => 0.9, "aboutId" => 2);
	$technicalDetailsArr[] = array("technicalId" => 7, "technicalSkill" => 'Laravel', "technicalWorking" => 1.5, "aboutId" => 2);
	$technicalDetailsArr[] = array("technicalId" => 8, "technicalSkill" => 'PHP', "technicalWorking" => 3.5, "aboutId" => 3);
	$technicalDetailsArr[] = array("technicalId" => 9, "technicalSkill" => 'Yii', "technicalWorking" => 3.5, "aboutId" => 3);
	$technicalDetailsArr[] = array("technicalId" => 10, "technicalSkill" => 'PHP', "technicalWorking" => 3.5, "aboutId" => 4);
	$technicalDetailsArr[] = array("technicalId" => 11, "technicalSkill" => 'Yii', "technicalWorking" => 3.5, "aboutId" => 4);
	$technicalDetailsArr[] = array("technicalId" => 12, "technicalSkill" => 'PHP', "technicalWorking" => 3.5, "aboutId" => 5);
	$technicalDetailsArr[] = array("technicalId" => 13, "technicalSkill" => 'Yii', "technicalWorking" => 3.5, "aboutId" => 5);
	foreach($technicalDetailsArr as $technicalDetailsArr){
		if($id == $technicalDetailsArr['aboutId']){
			$technicalDetailsResult['technical'][] = $technicalDetailsArr;
		}
	}

	//Project Details
	$projectDetailsArr[] = array("projectId" => 1, "projectName" => 'Sinzer', "aboutId" => 2);
	$projectDetailsArr[] = array("projectId" => 2, "projectName" => 'Solr', "aboutId" => 2);
	$projectDetailsArr[] = array("projectId" => 3, "projectName" => 'WebHR', "aboutId" => 3);
	$projectDetailsArr[] = array("projectId" => 4, "projectName" => 'Sinzer', "aboutId" => 3);
	$projectDetailsArr[] = array("projectId" => 5, "projectName" => 'Sinzer', "aboutId" => 1);
	$projectDetailsArr[] = array("projectId" => 6, "projectName" => 'Solr', "aboutId" => 1);
	$projectDetailsArr[] = array("projectId" => 7, "projectName" => 'Sinzer', "aboutId" => 4);
	$projectDetailsArr[] = array("projectId" => 8, "projectName" => 'Sinzer', "aboutId" => 5);
	foreach($projectDetailsArr as $projectDetailsArr){
		if($id == $projectDetailsArr['aboutId']){
			$projectDetailsResult['project'][] = $projectDetailsArr;
		}
	}

	//Project Description Details
	$projectDescriptionArr[] = array("projectDId" => 1, "projectDes" => 'Welcome to Sinzer', "projectId" => 1);
	$projectDescriptionArr[] = array("projectDId" => 2, "projectDes" => 'Welcome to Solr', "projectId" => 2);
	$projectDescriptionArr[] = array("projectDId" => 3, "projectDes" => 'Welcome to WebHR', "projectId" => 3);
	$projectDescriptionArr[] = array("projectDId" => 4, "projectDes" => 'Welcome to Sinzer', "projectId" => 4);
	$projectDescriptionArr[] = array("projectDId" => 5, "projectDes" => 'Welcome to Sinzer', "projectId" => 5);
	$projectDescriptionArr[] = array("projectDId" => 6, "projectDes" => 'Welcome to Solr', "projectId" => 6);
	$projectDescriptionArr[] = array("projectDId" => 7, "projectDes" => 'Welcome to Sinzer', "projectId" => 7);
	$projectDescriptionArr[] = array("projectDId" => 8, "projectDes" => 'Welcome to Sinzer', "projectId" => 8);
	foreach($projectDescriptionArr as $projectDescriptionArr){
		//if(isset($projectDescriptionArr['projectId'])){
		if(isset($pid)){
			$projectDescriptionResult['projectDescription'][] = $projectDescriptionArr;
		}
	}
	$result = array_merge($aboutResult,$technicalDetailsResult,$projectDetailsResult,$projectDescriptionResult);
	echo json_encode($result);	
}

?>
