---
id: 2026-09-15-infra-glossary
title: "[인프라 용어사전] CPO (Co-Packaged Optics) - 구리선 한계 극복하는 칩렛-광학 통합 인터커넥트"
date: 2026-09-15
time: "05:53"
category: Terminology
status: published
summary: "하드웨어 아키텍처 차세대 네트워킹 반도체 패키징 CPO(Co-Packaged Optics)는 스위칭 ASIC 및 가속기 반도체와 광학 변환 엔진(Optical Engine)을 동일 기판 위에 단일 패키지로 통합 실장하여 전기 신호 배선 손실을 억제하고 데이터센터 인터커넥트 전력을 획기적으로 절감하는 물리 계층 패키징 아키텍처입니다. 📌 1. 30초 핵심 요"
labels:
  - 인프라용어사전
  - IT백과사전
  - CPO
  - AWS
  - 데이터센터
---

<div style='font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.8; color: #1E293B; max-width: 820px; margin: 0 auto;'>

  <!-- 메타 카드 -->
  <div style='background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px 24px; margin-bottom: 28px;'>
    <div style='display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;'>
      <span style='background: #3B82F6; color: #FFFFFF; font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 9999px;'>하드웨어 아키텍처</span>
      <span style='background: #E0E7FF; color: #4338CA; font-size: 12px; font-weight: 600; padding: 3px 10px; border-radius: 9999px;'>차세대 네트워킹</span>
      <span style='background: #F1F5F9; color: #475569; font-size: 12px; font-weight: 600; padding: 3px 10px; border-radius: 9999px;'>반도체 패키징</span>
    </div>
    <p style='margin: 0; font-size: 15px; color: #334155; line-height: 1.6;'>
      <strong>CPO(Co-Packaged Optics)</strong>는 스위칭 ASIC 및 가속기 반도체와 광학 변환 엔진(Optical Engine)을 동일 기판 위에 단일 패키지로 통합 실장하여 전기 신호 배선 손실을 억제하고 데이터센터 인터커넥트 전력을 획기적으로 절감하는 물리 계층 패키징 아키텍처입니다.
    </p>
  </div>

  <!-- 1. 30초 핵심 요약 & 개념 정의 -->
  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin: 32px 0 16px 0;'>📌 1. 30초 핵심 요약 & 개념 정의</h2>
  
  <div style='background: #EFF6FF; border-left: 4px solid #3B82F6; padding: 14px 18px; border-radius: 0 8px 8px 0; margin-bottom: 18px;'>
    <p style='margin: 0; font-size: 14px; color: #1E40AF; font-weight: 600;'>직관적 아키텍처 비유</p>
    <p style='margin: 6px 0 0 0; font-size: 14px; color: #1E3A8A; line-height: 1.6;'>
      중앙 물류창고(스위치 코어)에서 분류된 화물을 수십 킬로미터 떨어진 공항 활주로(전면 패널 광 트랜시버)까지 혼잡한 일반 도로(PCB 구리 배선)로 실어 나르는 대신, 물류창고 부지 바로 옆에 전용 활주로를 직접 건설하여 화물이 출고되는 즉시 빛의 속도로 항공 수송을 시작하는 구조입니다.
    </p>
  </div>

  <p style='font-size: 15px; margin-bottom: 16px;'>
    <strong>공학적 정의</strong>: CPO는 연산 및 패킷 스위칭을 담당하는 전자인자 집적회로(EIC/ASIC)와 광신호를 생성·변조하는 광학 집적회로(PIC, Photonic Integrated Circuit)를 개별 모듈로 분리하지 않고, 첨단 2.5D/3D 실리콘 인터포저 또는 유기 기판(Organic Substrate) 위에 초근접 칩렛(Chiplet) 형태로 실장하는 기술 규격입니다.
  </p>
  <p style='font-size: 15px; margin-bottom: 24px;'>
    기존 데이터센터 네트워크 스위치는 샤시 전면 패널에 장착되는 탈착식 광 트랜시버(Pluggable Transceiver)를 사용해 왔으나, 인터페이스 대역폭이 800Gbps 및 1.6Tbps로 증가함에 따라 구리 배선의 신호 감쇄와 발열이 물리적 한계에 도달했습니다. CPO는 이러한 전송 손실 장벽을 극복하기 위한 차세대 표준으로 자리잡고 있습니다.
  </p>

  <!-- 2. 작동 원리 & 메커니즘 -->
  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin: 36px 0 16px 0;'>⚙️ 2. 작동 원리 & 메커니즘</h2>
  
  <h3 style='font-size: 16px; font-weight: 700; color: #1E293B; margin: 20px 0 10px 0;'>전기 신호 손실 억제와 초단거리 SerDes 적용</h3>
  <p style='font-size: 15px; margin-bottom: 14px;'>
    레인당 100Gbps~200Gbps에 달하는 고주파 전기 신호가 메그트론(Megtron) 급 고급 PCB 기판을 통과할 때, 표피 효과(Skin Effect)와 유전체 손실로 인해 신호 세기가 급격히 감쇄됩니다. 기존 플러그형 트랜시버 구조에서는 ASIC과 전면 포트 사이의 물리적 거리(약 15~30cm)를 극복하기 위해 높은 전력을 소모하는 장거리 구동용 SerDes(LR SerDes)와 리타이머(Retimer/DSP) 칩이 필수적이었습니다.
  </p>
  <p style='font-size: 15px; margin-bottom: 16px;'>
    CPO 구조에서는 스위치 ASIC 코어와 광 엔진 간의 물리적 배선 길이가 수 밀리미터(mm) 수준으로 단축됩니다. 이에 따라 신호 보상용 리타이머를 전면 제거하거나 대폭 단순화할 수 있으며, 초단거리 인터페이스 규격(XSR/USR, Extra/Ultra Short Reach)을 사용할 수 있습니다. 결과적으로 비트당 I/O 전송 에너지를 기존 10~15 pJ/bit 수준에서 2~4 pJ/bit 수준으로 70% 이상 낮춥니다.
  </p>

  <h3 style='font-size: 16px; font-weight: 700; color: #1E293B; margin: 20px 0 10px 0;'>외장형 레이저 광원(ELS) 분리 아키텍처</h3>
  <p style='font-size: 15px; margin-bottom: 18px;'>
    반도체 레이저 다이오드(InP/GaAs 기반 CW 레이저)는 열에 매우 취약하여, 정션 온도가 상승하면 광출력 효율이 저하되고 평균 고장 간격(MTBF)이 기하급수적으로 단축됩니다. 수백 와트 이상의 열을 방출하는 메인 스위치 ASIC 바로 옆에 레이저 광원을 배치할 경우 치명적인 신뢰성 저하가 발생합니다.
  </p>
  <p style='font-size: 15px; margin-bottom: 24px;'>
    이를 해결하기 위해 OIF(Optical Internetworking Forum) 표준에서는 레이저 광원을 전면 패널의 착탈식 폼팩터(ELSFP)로 분리하는 외장형 레이저 소스(External Laser Source, ELS) 아키텍처를 규격화했습니다. 레이저 모듈만 전면 패널에서 손쉽게 핫스왑(Hot-swap) 교체하고, 생성된 연속파(CW) 레이저 빛은 편광 유지 광섬유(PMF)를 통해 기판 내부의 CPO 광 엔진으로 공급하는 구조입니다.
  </p>

  <!-- 비교 테이블 -->
  <div style='overflow-x: auto; margin: 24px 0;'>
    <table style='width: 100%; border-collapse: collapse; font-size: 13px; text-align: left; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px;'>
      <thead>
        <tr style='background: #F1F5F9; color: #334155; border-bottom: 2px solid #CBD5E1;'>
          <th style='padding: 12px; font-weight: 700;'>비교 항목</th>
          <th style='padding: 12px; font-weight: 700;'>플러그형 트랜시버 (Pluggable)</th>
          <th style='padding: 12px; font-weight: 700;'>온보드 광학 (OBO)</th>
          <th style='padding: 12px; font-weight: 700; color: #2563EB;'>공동 패키징 광학 (CPO)</th>
        </tr>
      </thead>
      <tbody>
        <tr style='border-bottom: 1px solid #E2E8F0;'>
          <td style='padding: 12px; font-weight: 600; background: #F8FAFC;'>배선 전송 거리</td>
          <td style='padding: 12px;'>15 ~ 30 cm (PCB 트레이스)</td>
          <td style='padding: 12px;'>5 ~ 15 cm (중간 거리)</td>
          <td style='padding: 12px; font-weight: 700; color: #1D4ED8;'>10 mm 이하 (기판 직결)</td>
        </tr>
        <tr style='border-bottom: 1px solid #E2E8F0;'>
          <td style='padding: 12px; font-weight: 600; background: #F8FAFC;'>I/O 에너지 효율</td>
          <td style='padding: 12px;'>약 12 ~ 18 pJ/bit</td>
          <td style='padding: 12px;'>약 7 ~ 10 pJ/bit</td>
          <td style='padding: 12px; font-weight: 700; color: #1D4ED8;'>약 2 ~ 4 pJ/bit</td>
        </tr>
        <tr style='border-bottom: 1px solid #E2E8F0;'>
          <td style='padding: 12px; font-weight: 600; background: #F8FAFC;'>스위치 전력 비중</td>
          <td style='padding: 12px;'>전체 스위치 전력의 35~45%</td>
          <td style='padding: 12px;'>전체 스위치 전력의 25~30%</td>
          <td style='padding: 12px; font-weight: 700; color: #1D4ED8;'>전체 스위치 전력의 15% 미만</td>
        </tr>
        <tr style='border-bottom: 1px solid #E2E8F0;'>
          <td style='padding: 12px; font-weight: 600; background: #F8FAFC;'>전면 패널 대역폭 밀도</td>
          <td style='padding: 12px;'>낮음 (포트 크기 물리적 한계)</td>
          <td style='padding: 12px;'>보통 (광섬유 인출 구조)</td>
          <td style='padding: 12px; font-weight: 700; color: #1D4ED8;'>극대화 (초고밀도 MPO 커넥터)</td>
        </tr>
        <tr>
          <td style='padding: 12px; font-weight: 600; background: #F8FAFC;'>유지보수 및 교체성</td>
          <td style='padding: 12px;'>탁월 (전면 개별 핫플러그)</td>
          <td style='padding: 12px;'>낮음 (시스템 분해 필요)</td>
          <td style='padding: 12px; color: #475569;'>보완형 (외장 레이저 모듈 분리)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 3. 오늘자 실제 적용 사례 -->
  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin: 36px 0 16px 0;'>🏢 3. 오늘자 실제 적용 사례 (오늘 뉴스 연계)</h2>
  
  <div style='border: 1px solid #E2E8F0; border-radius: 8px; padding: 18px 20px; background: #FAFAFA; margin-bottom: 16px;'>
    <div style='font-weight: 700; font-size: 15px; color: #0F172A; margin-bottom: 8px;'>
      1) 아마존 AWS 2,200억 달러 CapEx 투자 및 퀄컴 파트너십
    </div>
    <p style='margin: 0; font-size: 14px; color: #334155; line-height: 1.7;'>
      아마존 CEO 앤디 재시가 AWS 중심의 대규모 설비 투자를 공식화하고, 퀄컴과 차세대 AI 데이터센터 인프라 및 반도체 생태계 협력에 착수했습니다. 차세대 거대언어모델(LLM) 훈련 및 피지컬 AI 클러스터에서는 수만 개의 커스텀 가속 칩이 상호 연결됩니다. 단일 랙 전력 밀도가 100kW를 초과하는 환경에서 네트워크 스위치가 소비하는 기생 전력을 억제하지 못하면 인프라 증설 자체가 불가능해집니다. AWS와 퀄컴의 차세대 실리콘 협력에서 CPO는 랙 내부 칩 간 통신 전력을 방어하기 위한 필수 기술로 주목받고 있습니다.
    </p>
  </div>

  <div style='border: 1px solid #E2E8F0; border-radius: 8px; padding: 18px 20px; background: #FAFAFA; margin-bottom: 24px;'>
    <div style='font-weight: 700; font-size: 15px; color: #0F172A; margin-bottom: 8px;'>
      2) 블랙스톤 구글 TPU 50억 달러 출자(500MW) 및 호주 2GW AI 연합
    </div>
    <p style='margin: 0; font-size: 14px; color: #334155; line-height: 1.7;'>
      블랙스톤이 구글 TPU 생태계에 대규모 자금을 출자하여 2027년까지 500MW 규모의 인프라를 확보하고, 엔비디아가 호주 데이터센터 연합과 2GW 규모의 AI 영토 확장에 나서는 등 하이퍼스케일러의 전력 확보전이 심화되고 있습니다. 전력망 용량이 제약된 상황에서 51.2Tbps 및 102.4Tbps 스위치 샤시당 소비전력이 2kW를 넘어서는 기존 트랜시버 구조는 전력 효율성을 크게 저해합니다. 글로벌 가속기 팜 운영사들은 동일 수전 용량 대비 실제 연산(FLOPS) 할당률을 극대화하기 위해 CPO 기반 스위치 패브릭 도입을 가속화하고 있습니다.
    </p>
  </div>

  <!-- 4. 기술적 장단점 및 도입 시 고려사항 -->
  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin: 36px 0 16px 0;'>⚖️ 4. 기술적 장단점 및 도입 시 고려사항</h2>
  
  <div style='display: grid; grid-template-columns: 1fr; gap: 16px; margin-bottom: 20px;'>
    <div style='background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 16px 18px;'>
      <span style='color: #166534; font-weight: 700; font-size: 14px;'>주요 공학적 이점</span>
      <ul style='margin: 8px 0 0 0; padding-left: 18px; font-size: 14px; color: #14532D; line-height: 1.6;'>
        <li><strong>전력 소비 급감</strong>: 51.2Tbps 스위치 기준 시스템 전체 I/O 전력을 최대 30~40% 절감하여 랙 단위 전력 여유분 확보.</li>
        <li><strong>대역폭 밀도 한계 돌파</strong>: 1RU/2RU 랙 유닛 전면 패널의 물리적 면적 한계를 극복하고 수십 테라비트의 광섬유를 직접 인출 가능.</li>
        <li><strong>통신 지연시간 단축</strong>: 복잡한 DSP 리타이밍 연산 단계가 생략되어 마이크로초(µs) 이하 수준의 클러스터 패브릭 레이턴시 달성.</li>
      </ul>
    </div>
    
    <div style='background: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; padding: 16px 18px;'>
      <span style='color: #991B1B; font-weight: 700; font-size: 14px;'>도입 시 엔지니어링 고려사항 & 한계점</span>
      <ul style='margin: 8px 0 0 0; padding-left: 18px; font-size: 14px; color: #7F1D1D; line-height: 1.6;'>
        <li><strong>패키징 수율 및 폐기 리스크</strong>: 단일 기판에 결합된 여러 광 엔진 중 하나만 결함이 발생해도 고가의 메인 ASIC 전체를 폐기해야 하는 제조 수율 리스크가 존재합니다.</li>
        <li><strong>열적 결합(Thermal Coupling)</strong>: 고발열 스위치 ASIC(80~100°C)과 온도 변화에 민감한 실리콘 광학 소자가 인접하므로 정밀한 액체냉각 콜드플레이트 설계가 수반되어야 합니다.</li>
        <li><strong>광학 커넥터 유지보수성</strong>: 현장에서 광학 모듈 교체가 어려우므로, 탈착형 광학 커넥터(Detachable Optical Connector) 기술의 성숙도와 방진 관리가 필수적입니다.</li>
      </ul>
    </div>
  </div>

  <!-- 5. 엔지니어/실무자를 위한 1줄 인사이트 -->
  <h2 style='font-size: 20px; font-weight: 700; color: #0F172A; border-left: 4px solid #2563EB; padding-left: 12px; margin: 36px 0 16px 0;'>💡 5. 엔지니어/실무자를 위한 1줄 인사이트</h2>
  
  <blockquote style='margin: 0; padding: 18px 20px; background: #F8FAFC; border-left: 4px solid #0F172A; border-radius: 0 8px 8px 0; font-size: 15px; color: #0F172A; font-weight: 600; line-height: 1.7;'>
    "CPO는 단순한 광 트랜시버의 소형화 기술이 아니라, 100Tbps급 초거대 AI 클러스터에서 전력 한계(Power Wall)와 구리선의 물리적 신호 감쇄를 동시에 돌파하기 위해 반도체 패키징과 광 통신망의 경계를 허무는 필수 인프라 패러다임 시프트입니다."
  </blockquote>

</div>