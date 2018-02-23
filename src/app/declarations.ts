// export const Declarations={
//     name : 'Sai Ram Akuri',
//     mobile : '9494888392',
//     email : 'SAIRAM.AKURI@GMAIL.COM'
// }
export class defaultDeclarations {
    public defaultName: string = 'Sai Ram Akuri';
    public defaultMobile: number = 9494888392;
    public defaultEmail: string = 'SAIRAM.AKURI@GMAIL.COM';
    //public defaultSkills: string = 'PHP with Yii Framework, MySQL, Oracle, HTML, CSS, Angular';
    public defaultSkills = [
        {skill:'PHP', working:3.5},
        {skill:'Yii', working:3.5},
        {skill:'SQL', working:3.5},
        {skill:'JQuery', working:3.5},
        {skill:'Angular', working:0.3}
    ];
    public defaultProjects: string = 'Social Evaluator (http://tool.sinzer.org/)  is a web tool for social impact measurement through SROI analysis.';
    public defaultProjectsList = [
        {projectName: 'Sinzer', key: 0},
        {projectName: 'WebHR', key: 1}
    ];
    public defaultProjectsDescription = [
        {0:'Social Evaluator (http://tool.sinzer.org/)  is a web tool for social impact measurement through SROI analysis.',
        1:'WebHR is an internal web application'}
    ];
}