
import './App.css';
import Nav from './componeet/nav'
import Card from './componeet/card'
import Img1 from './componeet/image/10.jpg'
import Img2 from './componeet/image/2.jpg'
import Img3 from './componeet/image/3.jpg'
import Img4 from './componeet/image/4.jpg'
import Img5 from './componeet/image/5.jpg'
import Img6 from './componeet/image/6.jpg'

function App() {
  return (<>
  <Nav/>
  <div className='grid-container'>
  <Card img={Img1} title="Top Gun: Maverick" story="الفيلم تدور أحداثه بعد قضائه لأكثر من ثلاثين عاماً في القوات الجوية، حيث كان مافريك ضمن أفضل الطيارين، لكنه يتفادى التقدم فى الرتبة التى ستضعه فى مكانة مختلفة كما يستمر فى تطوير إمكانياته، يجد مافريك نفسه مكلفاً بتدريب كتيبة من خريجى Top Gun للقيام بمهمة محددة لم يقم بها طيار حى من قبل."  year="2022"></Card>
  <Card img={Img2} title="Shutter Island" story="القصة في 1954، ضابطان فيدراليان، إدوارد دانيلز وشريكه الجديد تشاك أول، يسافران إلى مشفى أشكليف للمجرمين المختلين عقلياً في جزيرة شاتر الواقعة قرب ميناء بوسطن، من أجل التحقيق في قضية أختفاء المريضة رايتشل سولاندو، المسجونة بسبب أغراقها لأطفالها الثلاثة." year="2010"></Card>
  <Card img={Img3} title="Catch me if you can" story="فرانك ابيغنايل الذي يهرب من بيت عائلته وهو في سن السادسة عشر بعد انفصالهما. ويعتمد علي مهاراته في تزوير الشيكات المختلفة من أجل الحصول على قوت يومه. لكن يتطور به الأمر لتحصيل أكثر من 2.5 مليون دولار عن طريق التزوير. خلال تلك العمليات نجد الضابط الفيدرالي كارل هنراتي  يطارد " year="2002"></Card>
  <Card img={Img4} title="The Godfather" story="عائلة كورليوني بداية من سنة 1945 إحدى أقوى عائلات المافيا الإيطالية في نيويورك والمتورطة بأعمال إجرامية مختلفة كإدارة نوادي القمار والبغاء إلا أن علاقات زعيم العائلة دون فيتو كورليوني (مارلون براندو) بشخصيات سياسية " year="1974"></Card>
  <Card img={Img5} title="John Wick" story=" يبحث عن الرجال الذين اقتحموا منزله وسرقوا سيارته الفاخرة وقتلوا جَرْوه الذي كان آخر هديةٍ من زوجته المتوفية حديثًا (مويناهان). أخرج ستاهيلسكي وديفيد ليتش الفيلم معًا، إلا أن ستاهيلسكي كان الوحيد بينهما الذي نُسب إليه" year="2014"></Card>
  <Card img={Img6} title="Forrest Gump" story=" فورست غامب؛ وهو شخصٌ بطيء الفهم ذو قوّةٍ بدنيةٍ مميزةٍ، من ولاية ألاباما، عاش وتأثر ببعض الأحداث الجليّة التي حدثت في النصف الأخير من القرن العشرين في الولايات المتحدة، تحديداً في فترة نشأته من 1944 إلى 1982." year="1994"></Card>
  
  </div>
  </>
  );
}

export default App;
