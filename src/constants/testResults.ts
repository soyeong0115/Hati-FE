import enfpImage from '@/assets/images/enfp.png';
import entpImage from '@/assets/images/entp.png';
import esfpImage from '@/assets/images/esfp.png';
import estpImage from '@/assets/images/estp.png';
import enfjImage from '@/assets/images/enfj.png';
import entjImage from '@/assets/images/entj.png';
import esfjImage from '@/assets/images/esfj.png';
import estjImage from '@/assets/images/estj.png';
import infpImage from '@/assets/images/infp.png';
import intpImage from '@/assets/images/intp.png';
import isfpImage from '@/assets/images/isfp.png';
import istpImage from '@/assets/images/istp.png';
import infjImage from '@/assets/images/infj.png';
import intjImage from '@/assets/images/intj.png';
import isfjImage from '@/assets/images/isfj.png';
import istjImage from '@/assets/images/istj.png';

export interface AnimalResult {
  mbti: string;
  name: string;
  image: string;
  description: string;
  emoji: string;
}

export const ANIMAL_RESULTS: Record<string, AnimalResult> = {
  ENFP: {
    mbti: 'ENFP',
    name: '럭키비키 행운 쿼카',
    emoji: '🍀',
    image: enfpImage,
    description:
      '연말에도 새로운 인연을 기대함\n나 빼고 노는 거 못 참음\n요즘 유행하는 거는 다 해봐야 함\n연말에 집에만 있는 거 못 참아!\n사람 만날 예정이 없으면 내가 약속을 만들어냄\n감동 잘 받고 감정 표현 풍부함\n고민도 많은데 자고 일어나면 금방 잊음\n연말 오면 갑자기 다들 너무 좋다고 난리\n칭찬 들으면 한 달 간 행복함',
  },
  ENTP: {
    mbti: 'ENTP',
    name: '토론대장 괄괄 호랑이',
    emoji: '🐯',
    image: entpImage,
    description:
      '인싸 중의 아싸, 아싸 중의 인싸\n일 벌이는 거 좋아하는데 끈기는 없음\n연말파티에서 밸런스게임은 필수\n토론하는 거 제일 좋아하는 쌈닭\n자기애가 강하고 본인 의견에 확신이 넘침\n연말에 갑자기 새로운 프로젝트 만드는데 3일만에 접음\n논리로 시작했다가 끝엔 드립으로 마무리',
  },
  ESFP: {
    mbti: 'ESFP',
    name: '슈퍼스타 카피바라',
    emoji: '⭐️',
    image: esfpImage,
    description:
      '올해 유행하는 아이템, 밈 가장 빠르게 아는 트렌드세터\n연말에는 집에 거의 안 붙어 있는 인싸\n사진 찍기 좋은 곳 귀신같이 찾아냄\n즉흥 여행, 즉흥 약속 뭐든 OK\n주목받는 거 좋아하고 관심을 즐김\n잘 먹고, 잘 자고, 생각이 단순함\n고민을 하다가도 그냥 잠드는 타입\n조직생활보다는 자유로울 때 능력 발휘\n어떤 상황이든 잘 적응하는 메타몽',
  },
  ESTP: {
    mbti: 'ESTP',
    name: '재미찾아 삼만리 설표',
    emoji: '☃️',
    image: estpImage,
    description:
      '스릴 좋아! 내기 좋아! 번개 좋아!\n갈등이 생겨도 대수롭지 않게 여기고 넘어감\n생각보다 행동이 먼저\n사람 많은 곳에서도 기죽지 않는 타입\n실용적인 선물 좋아함\n리더 안 할 것처럼 하다가 결국 주도함\n사람들 반응보다 자기 흥미가 우선\n개방적이고 자유를 추구해서 억압당하는 건 못 견딤',
  },
  ENFJ: {
    mbti: 'ENFJ',
    name: '노는 게 제일 좋아 펭귄',
    emoji: '🐧',
    image: enfjImage,
    description:
      '두 달 전부터 캐롤 듣는 설렘러\n가끔은 충동적으로 행동할 때가 있음\n선물하고 좋아하는 반응 보는 걸 좋아함\n하고 싶은 일에만 강력한 J력 발휘\n누가 자기 얘기하는 거 좋아함\n온화하고 사교성 풍부해서 친구 많음\n타인의 반응에 대해서 예민한 편\n싫은 소리는 되도록 하지 않음',
  },
  ENTJ: {
    mbti: 'ENTJ',
    name: '내가제일잘나가 으쓱여우',
    emoji: '🦊',
    image: entjImage,
    description:
      '연인 유무에 따라 연말 일상이 극과 극\n새해엔 올해보다 더 멋진 일들을 하겠다고 계획하며 즐거워함\n자기애 강함\n내 말이 다 맞다고 생각함\n리더십 최고인 일잘러\n남들이 못하는 걸 해내면서 자부심 느낌\n충분한 시간과 자원이 있으면 어떤 목표도 달성할 수 있다고 굳게 믿는 편\n감정 표현 적당히 하지만 마음은 진심',
  },
  ESFJ: {
    mbti: 'ESFJ',
    name: '똑똑이 안경 뱁새',
    emoji: '🐦',
    image: esfjImage,
    description:
      '원래도 바쁜데 연말에는 더 바쁜 약속쟁이\n(약속 잡는 카톡방만 n개)\n이것저것 계획하고 예약하느라 바쁨\n연말이 되면 올해 세운 목표를 되돌아보고, 1년을 추억하며 즐거워함\n연말 모임 진행 맡으면 절대 사고 안 남\n단체사진 찍을 때 자연스럽게 자리 잡아줌\n스트레스 받으면 누군가를 꼭 만나야 함\n기브앤테이크 중요시함',
  },
  ESTJ: {
    mbti: 'ESTJ',
    name: '꼼꼼정리 엄격 두더지',
    emoji: '🖤',
    image: estjImage,
    description:
      '크리스마스 특별하게 생각 안 하고 평소처럼 보내는 편\n크리스마스는 그냥 공휴일이라고 생각함\n자기 할 일이 제일 중요★\n본투비리더\n감정 과몰입보다 현실 우선\n절이 싫으면 중이 떠나라? 절이 싫더라도 남아 있는 게 중에게 이롭다고 생각함\n불필요한 비용·시간 낭비 극혐\n싸움을 가급적 피하는 편이지만, 싸워야 되는 상황이 오면 총력을 다함',
  },
  INFP: {
    mbti: 'INFP',
    name: '담요 속 겨울 토끼',
    emoji: '🐰',
    image: infpImage,
    description:
      '파티는 가고 싶은데? 외출은 싫어\n하루종일 캐롤 플레이리스트 틀어두기\n크리스마스 분위기 내는 거 중요도 최상\n연말 분위기로 트리 꾸미고 집 꾸미기 필수\n적어도 두 달 전부터 크리스마스 과몰입함\n감정 회복 시간 없으면 기력 0%\n생각 많아서 연말에 혼자 회상 타임 감성 폭발\n상대방 배려해서 빙빙 돌려 은유적으로 표현함',
  },
  INTP: {
    mbti: 'INTP',
    name: '생각부자 고양이',
    emoji: '🐈',
    image: intpImage,
    description:
      '생각은 많으나 몸은 이불속\n감정선이 독특해서 남들이 이해 못할 때 있음\n빈말 못함, 솔직함 MAX\n자기주장 강하고 직설적임\n먼저 대화를 시작하지는 않는 편이지만? 관심 있는 분야에서는 수다쟁이\n주위에 피해를 주지 않고, 또 피해를 받고 싶어 하지 않음\n첫인상은 무뚝뚝해 보이는데 친해지면 세상 엉뚱함',
  },
  ISFP: {
    mbti: 'ISFP',
    name: '포근포근 겨울잠 코알라',
    emoji: '🐨',
    image: isfpImage,
    description:
      '크리스마스에도 침대가 최고인 집순이/집돌이\n연말 분위기 자체는 좋아하지만 사람 많은 곳은 부담\n이불 속에서 크리스마스 영화 보는 게 제일 좋음\n집에 가면 연락 두절\n눈치 제일 빠르지만 둔한 척함\n멘탈은 강한 편이나 한 번 깨진 멘탈은 복구가 힘든 편\n소확행 좋아함\n화가 나면 논리적으로 반박하기보다 침묵',
  },
  ISTP: {
    mbti: 'ISTP',
    name: '침대와 한몸 판다',
    emoji: '🐼',
    image: istpImage,
    description:
      '크리스마스 = 그냥 빨간 날\n크리스마스에도 오후 2시 기상\n연말에 나가면 사람 많아서 싫음 집이 최고\n타인의 일에 무관심하고 뭘 하든 신경 잘 안 씀\n시간 낭비 절대 싫어하는 효율충\n관심 분야가 아니면 쳐다보지도 않음\n혼자만의 시간이 중요\n누가 통제하려고 하면 거리를 둠',
  },
  INFJ: {
    mbti: 'INFJ',
    name: '겉촉속바 북극곰',
    emoji: '🐻‍❄️',
    image: infjImage,
    description:
      '어떻게 하면 약속을 안 잡고 혼자만의 시간을 가져볼지 고민함\n친하고 깊은 관계가 있다면 그 사람과 어떻게 의미있는 시간을 보낼지 고민함\n(다만 체력과 에너지가 무리하지 않는 선에서)\n남들에겐 친절하지만 내면에 작은 악마가 있음\n화나면 무서움 (북극곰은 사람을 찢어.. )\n혼자만의 시간 방해하면 싫어함\n근데 싫은 내색 못함\n겉은 따뜻해도 속은 분석관 그 자체\n결단력 있어서 거절할 때는 단호하게 거절 잘함',
  },
  INTJ: {
    mbti: 'INTJ',
    name: '연말플랜 검은고양이',
    emoji: '🐈‍⬛',
    image: intjImage,
    description:
      '연인 유뮤에 따라 연말일상이 극과극\n솔로일 때는 세상 비난적인데 연애 중일 때는 연인한테 평생 기억될 행복한 추억을 만들어 주려고 함\n사회화보다는 개인적 성공이 중요함\n바운더리가 분명한 편\n타인에게 관심 없음\n누군가가 자신을 재수없어 한다고 해도 신경X\n그런 점마저 오히려 만족해하는 편\n모든 계획이 머릿속에서 이미 완성됨',
  },
  ISFJ: {
    mbti: 'ISFJ',
    name: '따뜻한 코코아 사슴',
    emoji: '🦌',
    image: isfjImage,
    description:
      '밖보다 안에서 보내는 시간이 중요\n사람 많은 곳 가면 금방 기 빨림\n입이 1톤. 비밀 잘 지킴\n남들에게는 관대하지만 본인에게는 엄격\n갈등 싫어하는 평화주의자\n그치만 선 넘으면 칼같이 손절\n누가 대신 결정해주는 게 마음 편함\n승부욕과는 거리가 멀어서 경쟁, 우승 같은 것들엔 무관심',
  },
  ISTJ: {
    mbti: 'ISTJ',
    name: '마이웨이 거북이',
    emoji: '🐢',
    image: istjImage,
    description:
      '크리스마스에도 자기 할 일이 제일 중요\n연말 특별하게 생각 안 하고 평소처럼 보냄\n정해진 규율과 규칙이 중요한 원칙주의자\n혼자하는 일 좋아함\n리액션 잘 못함\n예측 가능한 하루가 행복\n즉흥적 제안은 매우 부담\n실수 깨달으면 즉각 수정\n인내심이 강해서 참고 참았다가 터뜨리는 편',
  },
};

export { calculateMBTI } from '@/utils/mbtiCalculator';
