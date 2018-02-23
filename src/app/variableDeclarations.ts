import { aboutService,technicalService,projectListService,projectDetailService } from './variableConfigurations';

/*
export const aboutDetails: aboutService[] = [
	{aboutId: 1, aboutName: 'Sai Ram Akuri', aboutMobile: 9494888392, aboutEmail: 'SAIRAM@COMAKEIT.COM'},
	{aboutId: 2, aboutName: 'Maruthi', aboutMobile: 9494888392, aboutEmail: 'MARUTHI@COMAKEIT.COM'},
	{aboutId: 3, aboutName: 'Ram', aboutMobile: 9494888392, aboutEmail: 'RAM@COMAKEIT.COM'},
	{aboutId: 4, aboutName: 'Lalita', aboutMobile: 9494888392, aboutEmail: 'LALITA@COMAKEIT.COM'},
	{aboutId: 5, aboutName: 'Srinath', aboutMobile: 9494888392, aboutEmail: 'SRINATH@COMAKEIT.COM'},
];
*/

export const aboutDetails: aboutService[] = [
	{aboutId: 1, aboutName: 'Sai Ram Akuri', aboutMobile: 9494888392, aboutEmail: 'SAIRAM@COMAKEIT.COM'}
];

export const technicalDetails: technicalService[] = [
	{technicalId: 1, technicalSkill: 'PHP', technicalWorking: 3.5},
	{technicalId: 2, technicalSkill: 'Yii', technicalWorking: 3.5},
	{technicalId: 3, technicalSkill: 'Oracle', technicalWorking: 3.5},
	{technicalId: 4, technicalSkill: 'JQuey', technicalWorking: 3.5},
	{technicalId: 4, technicalSkill: 'Angular', technicalWorking: 0.5},
	{technicalId: 4, technicalSkill: 'Solr', technicalWorking: 0.9},
	{technicalId: 4, technicalSkill: 'Laravel', technicalWorking: 1.5},
];

export const ProjectListDetails: projectListService[] = [
	{projectListId: 1, projectListName: 'Sinzer'},
	{projectListId: 2, projectListName: 'Angular'}
];

export const projectDescriptionDetail: projectDetailService[] = [
	{projectDetailId: 1,projectDetailListId: 1, projectDetailName: 'Sinzer Project Description'},
	{projectDetailId: 2,projectDetailListId: 2, projectDetailName: 'Angular Project Description'}
];
